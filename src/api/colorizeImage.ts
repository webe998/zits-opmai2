import {request} from "@/util/request";

export async function colorizeImage(formData) {
    return request.post({
        url:'/colorize_image_with_auto_prompt',
        responseType: 'blob',
        data:formData
    })
}

