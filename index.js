const readline = require('readline-sync')

function start(){
        const content = {}

        content.searchTerm = askAndReturnSearchTerm()
        content.prefix = askAndreturnPrefix()

        function askAndReturnSearchTerm(){
                return readline.question('Pesquisa Wikipedia: ')
        }

        function askAndreturnPrefix(){
                const prefix = ['Who is', 'What is', 'The history of']
                const selectedPrefixIndex = readline.keyInSelect(prefix, 'Qual Prefix: ')
                const selectedPrefixText = prefix[selectedPrefixIndex]
                
                return selectedPrefixText
        }

        console.log(content)
}
start()
