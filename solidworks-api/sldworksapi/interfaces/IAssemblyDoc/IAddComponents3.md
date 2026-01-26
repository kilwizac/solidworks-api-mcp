---
type: method
interface: IAssemblyDoc
member: IAddComponents3
returns: Component2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of components to add
  -
    name: Names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of full path names of components to add VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Transforms
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles of component transforms VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: CoordinateSystemNameCount
    type: System.Int32
    description: Number of coordinate system names in CoordinateSystemNames; include in the count all empty strings
  -
    name: CoordinateSystemNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of coordinate system names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddComponents3
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - iaddcomponents3
  - assembly
  - doc
  - add
  - components3
  - count
  - int32
  - names
  - string
  - transforms
  - double
  - coordinate
  - name
  - component2
---

# IAssemblyDoc.IAddComponents3

Adds multiple components to the assembly.

## Signature

```csharp
Component2 IAddComponents3( 
   System.Int32
Count
,
   ref System.String
Names
,
   ref System.Double
Transforms
,
   System.Int32
CoordinateSystemNameCount
,
   ref System.String
CoordinateSystemNames
)
```
## Parameters

- `Count` (System.Int32): Number of components to add
- `Names` (System.String): in-process, unmanaged C++: Pointer to an array of strings of full path names of components to add VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Transforms` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles of component transforms VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `CoordinateSystemNameCount` (System.Int32): Number of coordinate system names in CoordinateSystemNames; include in the count all empty strings
- `CoordinateSystemNames` (System.String): in-process, unmanaged C++: Pointer to an array of strings of coordinate system names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of IComponent2 VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Transforms contains an array of [Count x 16] doubles. This parameter stores one transformation matrix of 16 doubles for each component in Names. If a component's transformation matrix is null, then the component is placed in the assembly such that the component's user-defined coordinate system coincides exactly with the default coordinate system of the assembly (no transformation). See
IMathTransform
for details about transformation matrices.
CoordinateSystemNames contains a user-defined coordinate system name for each component in Names. If a component's user-defined coordinate system is an empty string, then the component is placed in the assembly with respect to the default coordinate system of the component.
The application must allocate the array of components, and it is also responsible for releasing the returned array of components.

## See Also

- `IAssemblyDoc.AddComponents3`