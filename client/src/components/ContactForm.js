import React from "react";
import ImgContact from "../assets/imgcontact.png";

export const ContactForm = () => {
  return (
    <div class="contact1">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
				<img src={ImgContact} alt="IMG" />
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					Haideti sa tinem legatura
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Numele este obligatoriu">
					<input class="input1" type="text" name="name" placeholder="Nume" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Email vaild este obligatoriu: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subiectul este obligatoriu">
					<input class="input1" type="text" name="subject" placeholder="Subiect" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Mesajul este obligatoriu">
					<textarea class="input1" name="message" placeholder="Mesaj"></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
						<span>
							Trimite
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
  );
};
