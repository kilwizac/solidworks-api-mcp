---
type: method
interface: IAssemblyDoc
member: AddComponents3
returns: System.Object
parameters:
  -
    name: Names
    type: System.Object
    description: Array of full path names of components
  -
    name: Transforms
    type: System.Object
    description: Array of transformation matrix doubles
  -
    name: CoordinateSystemNames
    type: System.Object
    description: Array of coordinate system names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.IAddComponents3
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - addcomponents3
  - assembly
  - doc
  - add
  - components3
  - names
  - object
  - transforms
  - coordinate
  - vb
  - net
  - vba
---

# IAssemblyDoc.AddComponents3

Adds multiple components to the assembly.

## Signature

```csharp
System.Object AddComponents3( 
   System.Object
Names
,
   System.Object
Transforms
,
   System.Object
CoordinateSystemNames
)
```
## Parameters

- `Names` (System.Object): Array of full path names of components
- `Transforms` (System.Object): Array of transformation matrix doubles
- `CoordinateSystemNames` (System.Object): Array of coordinate system names

## Return Value

Array of IComponent2 objects

## Remarks

Transforms contains an array of [(Names count) x 16] doubles. This parameter stores one transformation matrix of 16 doubles for each component in Names. If a component's transformation matrix is null, then the component is placed in the assembly such that the component's user-defined coordinate system coincides exactly with the default coordinate system of the assembly (no transformation). See
IMathTransform
for details about transformation matrices.
CoordinateSystemNames contains a user-defined coordinate system name for each component in Names. If a component's user-defined coordinate system is an empty string, then the component is placed in the assembly with respect to the default coordinate system of the component.
TIP
: See
ISldWorks::OpenDoc6
for tips on how to avoid using large amounts of memory when opening up multiple parts to add to an assembly

## Examples

- Add Components (C#) (Add_Components_Example_CSharp.htm)
- Add Components (VB.NET) (Add_Components_Example_VBNET.htm)
- Add Components (VBA) (Add_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.IAddComponents3`