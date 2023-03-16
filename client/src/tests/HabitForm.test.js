import { render, screen, waitFor} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import HabitForm from '../components/HabitForm';

const mockAPI = {
    'results': [
        {
            title: "Sleep",
            description: "Sleep at 7pm",
            category: "Health"
        },
        {
            title: "Save $100 more",
            description: "Move money into savings account",
            category: "Wealth"
        },
        {
            title: "Check in more often",
            description: "Journal thoughts and set up reminders to check in with myself more often",
            category: "Self-love"
        },
    ]
}

let windowFetchSpy;

const wait = (milliseconds) => {
    return new Promise(resolve => {
        setTimeout( resolve, milliseconds)
    })
}

let mockApi = async (url) => {
    if (url.startsWith('http://localhost:3000/') && url.includes('/habits')) {
        await wait(70);
        return {
            ok: true,
            status: 200,
            json: async () => mockAPI,
        }
    }
}

beforeEach(() => {
    windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockApi)
})

afterEach(() => {
    jest.restoreAllMocks();
})

test('should show titles after they are fetched', async () => {
    render (
    <BrowserRouter>
    <HabitForm />
    </BrowserRouter>);
    expect(windowFetchSpy).toHaveBeenCalled();
    expect(windowFetchSpy).toHaveBeenCalledWith('http://localhost:3000//api/habits')

    await waitFor(() => {
        expect(screen.getByText('Wealth')).toBeInTheDocument();
    })
})