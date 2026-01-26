---
type: property
interface: ISectionViewData
member: Redraw
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - redraw
  - isectionviewdata
  - section
  - view
  - data
  - boolean
  - create
  - model
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.Redraw

Gets or sets whether to have IModelViewManager::CreateSectionView validate and return a status for section bodies instead of section views.

## Signature

```csharp
System.Boolean Redraw {get; set;}
```
## Parameters

None.

## Return Value

True to validate and return a status for newly created section bodies, false to not

## Remarks

By default,
IModelViewManager::CreateSectionView
returns whether it successfully created a section view. Set this property to true to have
IModelViewManager::CreateSectionView
check and return whether it successfully created the section bodies.

## Examples

- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)