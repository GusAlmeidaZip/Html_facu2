// Função swap troca os valores de lugar
const swap = (vetor, i, j) => {
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};

const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        let j = Math.floor(Math.random() * vetor.length);
        let k = Math.floor(Math.random() * vetor.length);
        swap(vetor, j, k);
    }
};

// Fun Bubble Sort
const bubble_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

// Fun Selection Sort
const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIdx]) {
                minIdx = j;
            }
        }
        swap(vetor, i, minIdx);
    }
    return vetor;
};

// Fun quick_sort
const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// Fun quick_sort 
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pivo = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivo - 1);
        quick_sort(vetor, pivo + 1, fim);
    }
    return vetor;
};
