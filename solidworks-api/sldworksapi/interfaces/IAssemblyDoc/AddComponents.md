---
type: method
interface: IAssemblyDoc
member: AddComponents
returns: System.Object
parameters:
  -
    name: Names
    type: System.Object
    description: Array of strings component file names
  -
    name: Transforms
    type: System.Object
    description: Array of doubles of the component transforms
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.IAddComponents2
keywords:
  - addcomponents
  - iassemblydoc
  - assembly
  - doc
  - add
  - components
  - names
  - object
  - transforms
  - vba
---

# IAssemblyDoc.AddComponents

Obsolete. Superseded by IAssemblyDoc::AddComponents3.

## Signature

```csharp
System.Object AddComponents( 
   System.Object
Names
,
   System.Object
Transforms
)
```
## Parameters

- `Names` (System.Object): Array of strings component file names
- `Transforms` (System.Object): Array of doubles of the component transforms

## Return Value

Array of objects of newly created components

## Remarks

The array of file names represents all of the components that are added to the assembly. If there is more than one instance of a given component, make sure you add the file name of the component for each instance of the component.
The array of transforms consists of [count x 16] doubles. There should be one transform for each component being added.
TIP
: See
ISldWorks::OpenDoc6
for tips on how to avoid using large amounts of memory when opening up multiple parts to add to an assembly

## Examples

- Add Components (VBA) (Add_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.IAddComponents2`