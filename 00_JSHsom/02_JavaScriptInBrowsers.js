// 07:52 JavaScript in Browsers     11:41

// mozemo kod pisati ili u head ili body sekciju. Preporuca u body pri dnu kao best practices!!! kako bi izbjegli sporu stranicu zbog gomile js-koda u head-sekciji.
// ? <script>
// ?     console.log('Hello World');
// ?  </script>
// postoje izuzeci kad se treba postaviti u head ali to su izuzeci!!

// statement sa ; i stringom, spominje i daje i // comment This is my first JS kod

// refresha stranicu i voila! "Hello World". cai - kratica za konzolu na cromeu i operi i firefoxu u Mac-a i Winu  a csi  u Lin-u

// kad imam kod izmedju <script> tagova (kao gore) uz istovremeno postojanje linka scr na zasebni js-fail, kao npr

// ? <script src="12_TypesOfFunctions.js">
// ?    console.log('Hello World');
// ? </script>

// pobjedu odnosi js-fail i njegov se kod displeja na konzolu. Tek ako nema nikakve reference na scriptu, onda radi kod u sredini!