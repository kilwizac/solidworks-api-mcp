---
type: method
interface: IModelViewManager
member: CreateSectionViewData
returns: SectionViewData
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.GetSectionViewData
  - IModelViewManager.RemoveSectionView
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - model
  - createsectionviewdata
  - imodelviewmanager
  - view
  - manager
  - create
  - data
  - vb
  - net
  - vba
---

# IModelViewManager.CreateSectionViewData

Creates an empty ISectionViewData object whose properties you set before creating a section view in a part or an assembly.

## Signature

```csharp
SectionViewData CreateSectionViewData()
```
## Parameters

None.

## Return Value

Section view data

## Remarks

To create a section view in a part or assembly:
Use this method to create the SectionViewData object.
Set the properties of
ISectionViewData
.
Use
IModelViewManager::CreateSectionView
to create the section view. IModelViewManager::CreateSectionView only returns whether it successfully created the section view. It does not return whether it created valid section bodies. Set
ISectionViewData::Redraw
to true to have IModelViewManager::CreateSectionView validate and return a status for section bodies.

## Examples

- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)

## See Also

- `IModelViewManager.GetSectionViewData`
- `IModelViewManager.RemoveSectionView`