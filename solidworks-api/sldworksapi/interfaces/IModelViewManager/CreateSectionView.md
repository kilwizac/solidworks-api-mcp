---
type: method
interface: IModelViewManager
member: CreateSectionView
returns: System.Boolean
parameters:
  -
    name: SectionData
    type: SectionViewData
    description: Section view data
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
  - createsectionview
  - imodelviewmanager
  - view
  - manager
  - create
  - data
  - boolean
  - vb
  - net
  - vba
---

# IModelViewManager.CreateSectionView

Creates a section view in parts and assemblies.

## Signature

```csharp
System.Boolean CreateSectionView( 
   SectionViewData
SectionData
)
```
## Parameters

- `SectionData` (SectionViewData): Section view data

## Return Value

True if the section view is created, false if not ( see Remarks )

## Remarks

To create a section view in a part or assembly:
Use
IModelViewManager::CreateSectionViewData
to create the SectionViewData object.
Set the properties of
ISectionViewData
.
Use IModelViewManager::CreateSectionView to create the section view. This method only returns whether it successfully created the section view. It does not return whether it created valid section bodies. Set
ISectionViewData::Redraw
to true to have IModelViewManager::CreateSectionView validate and return a status for section bodies instead of section views.

## Examples

- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)

## See Also

- `IModelViewManager.GetSectionViewData`
- `IModelViewManager.RemoveSectionView`