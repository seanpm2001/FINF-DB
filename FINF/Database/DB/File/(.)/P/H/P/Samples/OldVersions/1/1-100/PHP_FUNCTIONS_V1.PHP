<?php
function myAge(int $birthYear): string
{
    // calculate the age by subtracting the birth year from the current year.
    $yearsOld = date('Y') - $birthYear;

    // return the age in a descriptive string.
    return $yearsOld . ' year' . ($yearsOld != 1 ? 's':'');
}

echo 'I am currently ' . myAge(1995) . ' old.';
?>
