import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static shouldBeUnique(
        control: AbstractControl
    ): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "priyanka") {
                    resolve({ shouldBeUnique: true });
                    console.log("no Error");
                } else resolve(null);
            }, 2000);
        });
    }

    static cannotContainSpace(
        control: AbstractControl
    ): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0)
            return { cannotContainSpace: true };
        return null;
    }
}
