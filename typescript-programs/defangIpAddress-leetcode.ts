// Defanging an IP Address

function defangIpAddress(address: string): string | null {
    if (address.length === 0) {
        return null;
    }

    return address.split('.').join('[.]');
}

const address = "1.1.1.1";
console.log(defangIpAddress(address));