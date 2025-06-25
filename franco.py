def elSexoEsValido(sexo):
    if sexo == "F" or sexo == "M":
        return True
    return False

def esValidaLaContrasena(contrasena):
    # TODO: pendiente de implementar
    return True

def ingresarUsuario(usuarios, nombre, sexo, contrasena):
    usuario = {}
    usuario["nombre"] = nombre
    usuario["sexo"] = sexo
    usuario["contrasena"] = contrasena
    usuarios.append(usuario)

def buscarUsuario(usuarios, nombre):
    for usuario in usuarios:
       if usuario["nombre"] == nombre:
          return usuario
    return None

def eliminarUsuario(usuarios, nombre):
    indice = None
    for i, usuario in enumerate(usuarios):
        if usuario["nombre"] == nombre:
            indice = i
            break
    del usuarios[indice]

usuarios = []

while True:
    print("\n1. - Ingresar usuario")
    print("2. - Buscar usuario")
    print("3. - Eliminar usuario")
    print("4. - Salir")
    opcion = int(input("Ingrese opcion: "))

    if opcion == 1:
        while True:
            nombre = input("\nIngrese nombre de usuario: ")
            usuario = buscarUsuario(usuarios, nombre)
            if usuario and nombre == usuario["nombre"]:
                print("Usuario ya existe. Intente otro")
            else:
                break

        while True:
            sexo =  input("\nIngrese sexo: ")
            esValido = elSexoEsValido(sexo)
            if esValido == False:
                print("Debe ingresar M o F solamente. Intente de nuevo")
            else:
                break

        while True:
            contrasena = input("\nIngrese contraseña: ")
            esValida = esValidaLaContrasena(contrasena)
            if esValida == False:
                print("Contraseña no valida. Intente otra")
            else:
                break

        ingresarUsuario(usuarios, nombre, sexo, contrasena)

    if opcion == 2:
        nombre = input("Ingrese nomnbre del usuario: ")
        usuario = buscarUsuario(usuarios, nombre)
        if usuario:
            sexo = usuario["sexo"]
            contrasena = usuario["contrasena"]
            print(f"El sexo del usuario es: {sexo} y la contraseña es: {contrasena}")
        else:
            print("El usuario no se encuentra")

    if opcion == 3:
        nombre = input("Ingrese nomnbre del usuario: ")
        usuario = buscarUsuario(usuarios, nombre)
        if usuario == None:
            print("No se pudo eliminar el usuario")
        else:
            eliminarUsuario(usuarios, nombre)
            print("Usuario eliminado")

    if opcion == 4:
        exit()
