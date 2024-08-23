
      document.addEventListener("DOMContentLoaded", function () {
        const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
        const contentArea = document.getElementById("content-area");

        const content = {
          about: `
              <div class="header-image">
                        <h1>TRAINING & PLACEMENT CELL</h1>
                    </div>
                    <!-- Content will be loaded here -->
                     <p>The Goal of the Training & Placement Cell of MITS Gwalior is to be a liaison between Industry and students to provide employment opportunities available in the market and to provide intensive training to the students for their overall development.</p>
                <p><strong>It works under the guidance of the Training & Placement Officer in consultation with the Faculty In-Charge.</strong></p>
                <p>Training & Placement Cell provides full placement support to its students in all areas of disciplines – Civil, Mechanical, Electrical, Electronics & Communication, Computer Science, Information Technology, Biotechnology & Chemical Engineering, Electronics & Telecommunication, Automobile Engineering and Computer Applications etc.</p>
                <p>Right from connecting with companies related to the above-mentioned disciplines in the industry to managing all logistics of arranging the whole campus recruitment process with the required hospitality; T&P Cell officials and student coordinators provide their best possible assistance to the recruiters.</p>
                <p>Apart from that, T&P Cell focuses on conducting soft & professional skills training for Pre-Final & Final year students, Industrial Projects/Internships & Training, Guest Lectures, Motivation & Guiding Sessions, Alumni connect programmes and building brand value of the Institute in the industry & market.</p>
                 <h1>Training & Placement Cell Activities</h1>
                    <p><strong>Training & Placement (T&P) Activities of the Institute consist of the following:</strong></p>

                    <h2>➤ Campus Placements Process:</h2>
                    <p>Campus Placement Processes are organized by different companies for providing job placements for students for that company's contact T&P cell of MITS Gwalior. We, T&P Cell, also invite companies every year. It arranges all logistics & hospitality required at their best for the conduction of the selection process at the Institute with all required infrastructure.</p>
                    <p>T&P Cell fulfills the purpose for both sides; for students to secure their future careers and for the industry to secure the best fresh talents available in the region. Companies are required to send their details and job description for the recruitment process by sending an official mail at tnp@mitsgwalior.in in the same regard.</p>

                    <h2>➤ Career Orientation Programmes:</h2>
                    <p>Demanding training programmes like Soft & Professional Skills training in the Institute through experienced experts and programmes to orient students about industry expectations are organized.</p>
                    <p>Additional Expert/Guest Lectures, Motivational & Guiding sessions, and training sessions to improve learning in the areas like Personality Development, Group Discussion, Aptitude Skills and Presentation Skills.</p>

                    <h2>➤ Industrial Training/Projects/Visits for the students:</h2>
                    <p>Industrial Training and Internships are an integral part of the study to acknowledge them for real-world problems. Students are placed in various industries for 6 to 8 weeks and under the supervision and guidance of respective industry personnel.</p>
               `,
          policy: `
             <section class="policy-section">
                <h2>Internship Policy</h2>
                <table>
                    <thead>
                        <tr>
                            <th style='width:20%;'>Sr. No.</th>
                            <th>Internship Policy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td><a href="#" download="path to file">Internship Policy and Formats</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="policy-section">
                <h2>Placement Policy</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Placement Policy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td><a href="#" download="path to file">Placement Policy</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>`,
          recruiters: `
           <div class="logo-grid">
                <!-- Example logo images -->
                <div class="logo-item"><img src="path/to/logo1.png" alt="Company 1"></div>
                <div class="logo-item"><img src="path/to/logo2.png" alt="Company 2"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 3"></div>
                <div class="logo-item"><img src="path/to/logo1.png" alt="Company 4"></div>
                <div class="logo-item"><img src="path/to/logo2.png" alt="Company 5"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 6"></div>
                <div class="logo-item"><img src="path/to/logo1.png" alt="Company 7"></div>
                <div class="logo-item"><img src="path/to/logo2.png" alt="Company 8"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 9"></div>
                <div class="logo-item"><img src="path/to/logo1.png" alt="Company 10"></div>
                <div class="logo-item"><img src="path/to/logo2.png" alt="Company 11"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 12"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 13"></div>
                <div class="logo-item"><img src="path/to/logo1.png" alt="Company 14"></div>
                <div class="logo-item"><img src="path/to/logo2.png" alt="Company 15"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 16"></div>
                <div class="logo-item"><img src="path/to/logo1.png" alt="Company 17"></div>
                <div class="logo-item"><img src="path/to/logo2.png" alt="Company 18"></div>
                <div class="logo-item"><img src="path/to/logo3.png" alt="Company 19"></div>
                <!-- Add more logo items here -->
            </div>`,
          records: `
           <div class="record">
     <h2>LAST 5 YEARS PLACEMENT RECORDS & STATISTICS</h2>
            <h3>MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE, GWALIOR (M.P.), INDIA</h3>
            <h4>Deemed University | NAAC ACCREDITED WITH A++ GRADE</h4>
            <table>
                <thead>
                    <tr>
                        <th>Year of Passout</th>
                        <th>Total Intake</th>
                        <th>Eligible Students</th>
                        <th>Company Visited</th>
                        <th>Total Placed</th>
                        <th>Highest Salary Offered (In Lacs per annum)</th>
                        <th>Average Salary Offered (In Lacs per annum)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024</td>
                        <td>1200</td>
                        <td>1093</td>
                        <td>58</td>
                        <td>579**</td>
                        <td>11.0 LPA</td>
                        <td>5.31 LPA</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td>960</td>
                        <td>895</td>
                        <td>54</td>
                        <td>635</td>
                        <td>20.16 LPA</td>
                        <td>5.09 LPA</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>990</td>
                        <td>845</td>
                        <td>55</td>
                        <td>759</td>
                        <td>1.0 Crore*</td>
                        <td>6.46 LPA</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>930</td>
                        <td>682</td>
                        <td>56</td>
                        <td>571</td>
                        <td>10.0 LPA</td>
                        <td>4.59 LPA</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td>930</td>
                        <td>734</td>
                        <td>43</td>
                        <td>526</td>
                        <td>14.35 LPA</td>
                        <td>5.78 LPA</td>
                    </tr>
                </tbody>
            </table>
            <div class="note">
                <p>*Highest CTC of Rs. 1.0 Cr and Rs. 40.0 LPA is not included in average salary offered.</p>
                <p>** Due to Market scenario 2024 batch placements are still going on</p>
            </div>
</div>
 <h2>LAST 3 YEARS INTERNSHIP RECORDS & STATISTICS</h2>
        <table class="internship-table">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Year</th>
                    <th>Total No. of Student</th>
                    <th>No. of Student Done Internship</th>
                    <th>No. of Students received stipend</th>
                    <th>Highest Stipend Amount in Rs. (Per Month)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>2024</td>
                    <td>975</td>
                    <td>873</td>
                    <td>311</td>
                    <td>1,10,000</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>2023</td>
                    <td>997</td>
                    <td>925</td>
                    <td>229</td>
                    <td>98,000</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>2022</td>
                    <td>621</td>
                    <td>535</td>
                    <td>170</td>
                    <td>87,000</td>
                </tr>
            </tbody>
        </table>
        
        <table class="record-table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Internship Record</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><a href="#">2021-22 Internship Report</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><a href="#">2022-23 Internship Report</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><a href="#">2023-24 Internship Report</a></td>
                </tr>
            </tbody>
        </table>
        `,
          alumni: `
           <section class="profiles">
        <div class="profile-card">
            <img src="profile1.jpg" alt="Profile 1">
            <div class="profile-text">
                <h2>Dr. Vijay Kumar Saraswat</h2>
                <h3>Member of NITI Aayog</h3>
                <p>Padma Shri (Prithvi Missile),<br> Padma Bhushan, Former Director-General, DRDO</p>
            </div>
        </div>
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div> 
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div> 
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
        <!-- Add more profile cards as needed -->
    </section>`,
          contact: `
    <div class="contact">
           <div class="contact-details">
            <img src="" alt="image1">
             <div>
                 <div class="header">Dr. Manish Dixit</div>
            <div class="sub-header">Chairman Admission Committee</div>
             </div>
           </div>

                 <div class="contact-info">
    <div class="card">
              <div class="header">Address</div>
        <div class="content">Dept. of CSE, MITS, Gwalior-05 (M.P.)</div>
    </div>

    <div class="card">
        <div class="header">Contact No:</div>
        <div class="content">9343250503</div>
    </div>

    <div class="card">
        <div class="header">Email Id:</div>
        <div class="content">admissions@itmgwalior.in</div>
    </div>
                 </div>
        </div>
        <div class="contact">
           <div class="contact-details">
            <img src="" alt="image1">
             <div>
                 <div class="header">Dr. Manish Dixit</div>
            <div class="sub-header">Chairman Admission Committee</div>
             </div>
           </div>

                 <div class="contact-info">
    <div class="card">
              <div class="header">Address</div>
        <div class="content">Dept. of CSE, MITS, Gwalior-05 (M.P.)</div>
    </div>

    <div class="card">
        <div class="header">Contact No:</div>
        <div class="content">9343250503</div>
    </div>

    <div class="card">
        <div class="header">Email Id:</div>
        <div class="content">admissions@itmgwalior.in</div>
    </div>
                 </div>
        </div>
    `,
        };

        sidebarLinks.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault();
            sidebarLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");

            const selectedContent = this.getAttribute("data-content");
            contentArea.innerHTML = content[selectedContent];
          });
        });
      });
