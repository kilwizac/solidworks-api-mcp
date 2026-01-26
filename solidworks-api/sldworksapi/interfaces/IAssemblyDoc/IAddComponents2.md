---
type: method
interface: IAssemblyDoc
member: IAddComponents2
returns: Component2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of components to add
  -
    name: Names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of component file names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Transforms
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles of component transforms VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddComponents
keywords:
  - iaddcomponents2
  - iassemblydoc
  - assembly
  - doc
  - add
  - components2
  - count
  - int32
  - names
  - string
  - transforms
  - double
  - component2
  - components
---

# IAssemblyDoc.IAddComponents2

Obsolete. Superseded by IAssemblyDoc::IAddComponents3.

## Signature

```csharp
Component2 IAddComponents2( 
   ref System.Int32
Count
,
   ref System.String
Names
,
   ref System.Double
Transforms
)
```
## Parameters

- `Count` (System.Int32): Number of components to add
- `Names` (System.String): in-process, unmanaged C++: Pointer to an array of strings of component file names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Transforms` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles of component transforms VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of IComponent2 VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The array of file names represents all of the components that you want to add to the assembly. If there is more than one instance of a given component, make sure to specify the file name for each instance of the component that you want to add.
The array of transforms consists of
[
count x 16
]
doubles. There should be one transform for each component to be added.
The application must allocate the array of components, and it is also responsible for releasing the returned array of components.

## Examples

- Add Components and Transforms (C++) (Add_Components_and_Transforms_Example_CPlusPlus_COM.htm)

## See Also

- `IAssemblyDoc.AddComponents`