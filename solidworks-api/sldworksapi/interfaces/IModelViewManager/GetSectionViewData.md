---
type: method
interface: IModelViewManager
member: GetSectionViewData
returns: SectionViewData
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the section view or an empty string for the active section view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.CreateSectionView
  - IModelViewManager.CreateSectionViewData
  - IModelViewManager.RemoveSectionView
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - model
  - getsectionviewdata
  - imodelviewmanager
  - view
  - manager
  - data
  - name
  - string
  - vb
  - net
  - vba
---

# IModelViewManager.GetSectionViewData

Gets access to the data of the specified section view.

## Signature

```csharp
SectionViewData GetSectionViewData( 
   System.String
ViewName
)
```
## Parameters

- `ViewName` (System.String): Name of the section view or an empty string for the active section view

## Return Value

Section view data

## Remarks

If the specified string refers to a non-existent section view or a view that is not sectioned, then this method returns Nothing or null.

## Examples

- Get Section View Data (C#) (Get_Section_View_Data_Example_CSharp.htm)
- Get Section View Data (VB.NET) (Get_Section_View_Data_Example_VBNET.htm)
- Get Section View Data (VBA) (Get_Section_View_Data_Example_VB.htm)

## See Also

- `IModelViewManager.CreateSectionView`
- `IModelViewManager.CreateSectionViewData`
- `IModelViewManager.RemoveSectionView`