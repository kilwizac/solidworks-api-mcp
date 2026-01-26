---
type: method
interface: IAssemblyDoc
member: SelectiveOpen
returns: System.Boolean
parameters:
  -
    name: SelectedComponents
    type: System.Boolean
    description: True to open only the components in the current selection list, false to open all of the components in the assembly
  -
    name: OpenLightWeight
    type: System.Boolean
    description: True to open the components in lightweight mode, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - file-io
  - selections
  - ui
related:
  - IAssemblyDoc.GetComponents
  - IAssemblyDoc.GetLightWeightComponentCount
  - IAssemblyDoc.MakeLightWeight
  - IAssemblyDoc.ResolveAllLightWeightComponents
  - IAssemblyDoc.ResolveAllLightweight
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - ISldWorks.OpenDoc6
keywords:
  - components
  - see
  - also
  - icomponent2
  - selective
  - open
  - assemblies
  - iassemblydoc
  - lightweight
  - large
  - design
  - review
  - mode
  - selectiveopen
  - assembly
  - doc
  - selected
  - boolean
  - light
  - weight
  - vba
  - vb
  - net
---

# IAssemblyDoc.SelectiveOpen

Selectively opens the components of an assembly that is opened in Large Design Review mode.

## Signature

```csharp
System.Boolean SelectiveOpen( 
   System.Boolean
SelectedComponents
,
   System.Boolean
OpenLightWeight
)
```
## Parameters

- `SelectedComponents` (System.Boolean): True to open only the components in the current selection list, false to open all of the components in the assembly
- `OpenLightWeight` (System.Boolean): True to open the components in lightweight mode, false to not

## Return Value

True if successful, false if not (see Remarks )

## Remarks

This method only works for assemblies that are opened in Large Design Review mode.
To open an assembly in Large Design Review mode:
Call
ISldWorks::GetOpenDocSpec
to create an instance of
IDocumentSpecification
.
Set
IDocumentSpecification::ViewOnly
to true.
Call
ISldWorks::OpenDoc7
, passing it the instance of IDocumentSpecification.
Before calling this method, call
IModelDocExtension::SelectByID2
to select the components that you want to open.

## Examples

- Open Assembly in Large Design Review Mode (VBA) (Open_Assembly_in_Large_Design_Review_Mode_Example_VB.htm)
- Open Assembly in Large Design Review Mode (VB.NET) (Open_Assembly_in_Large_Design_Review_Mode_Example_VBNET.htm)
- Open Assembly in Large Design Review Mode (C#) (Open_Assembly_in_Large_Design_Review_Mode_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.GetComponents`
- `IAssemblyDoc.GetLightWeightComponentCount`
- `IAssemblyDoc.MakeLightWeight`
- `IAssemblyDoc.ResolveAllLightWeightComponents`
- `IAssemblyDoc.ResolveAllLightweight`
- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `ISldWorks.OpenDoc6`