package MyStringExtensions
fun main() {
    val scope = "World"
    println("Hello, $scope!")
}

fun String.lastChar(): Char = get(length - 1)

>>> println("Kotlin".lastChar())
