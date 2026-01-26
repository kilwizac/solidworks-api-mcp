---
type: method
interface: IAssemblyDoc
member: GetComponentByID
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: Component ID of top-level assembly component (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetComponentByName
  - IAssemblyDoc.GetComponents
  - IAssemblyDoc.IGetComponents
keywords:
  - id
  - component
  - components
  - see
  - also
  - icomponent2
  - getcomponentbyid
  - iassemblydoc
  - assembly
  - doc
  - int32
  - object
  - top
  - level
  - using
  - ids
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetComponentByID

Gets a top-level assembly component using its component ID.

## Signature

```csharp
System.Object GetComponentByID( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): Component ID of top-level assembly component (see Remarks )

## Return Value

Top-level component

## Remarks

Call
IComponent2::GetID
before calling this method to get the component ID of the top-level assembly component to pass to this method.

## Examples

- Get Top-level Components Using Component IDs (C#) (Get_Top-level_Component_Using_Component_IDs_Example_CSharp.htm)
- Get Top-level Components Using Component IDs (VB.NET) (Get_Top-level_Component_Using_Component_IDs_Example_VBNET.htm)
- Get Top-level Components Using Component IDs (VBA) (Get_Top-level_Component_Using_Component_IDs_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetComponentByName`
- `IAssemblyDoc.GetComponents`
- `IAssemblyDoc.IGetComponents`