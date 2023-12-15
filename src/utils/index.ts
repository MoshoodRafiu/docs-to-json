import { SupportedFrameworks } from "../enums";
import { Framework } from "../interfaces";

export const frameworks: Framework[] = [
    {
        name: SupportedFrameworks.Laravel,
        versions: [
            {
                name: "10",
                url: "https://laravel.com/docs/10.x"
            }
        ]
    }
]