---
type: method
interface: IModelDocExtension
member: SelectAll
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IAssemblyDoc.SelectComponentsBySize
  - IBody2.GetEdges
  - IBody2.IGetEdges
  - IComponent2.Select4
  - IModelDocExtension.IMultiSelect
  - IModelDocExtension.MultiSelect
  - IModelDocExtension.SelectByID2
  - ISelectData
  - ISelectionMgr
  - ISldWorks.GetApplySelectionFilter
  - ISldWorks.GetSelectionFilter
  - ISldWorks.GetSelectionFilters
  - ISldWorks.IGetSelectionFilters
  - ISldWorks.IGetSelectionFiltersCount
  - ISldWorks.ISetSelectionFilters
  - ISldWorks.SetApplySelectionFilter
  - ISldWorks.SetSelectionFilter
  - ISldWorks.SetSelectionFilters
  - IView.ISelectEntity
  - IView.SelectEntity
keywords:
  - select
  - all
  - components
  - see
  - also
  - icomponent2
  - edge
  - iedge
  - part
  - parts
  - ipartdoc
  - edges
  - assemblies
  - iassemblydoc
  - drawings
  - idrawingdoc
  - box
  - selectall
  - imodeldocextension
  - model
  - doc
  - extension
  - void
  - assembly
  - drawing
  - vb
  - net
  - vba
---

# IModelDocExtension.SelectAll

Selects all edges in a part, all components in an assembly, or all entities (by default, sketch entities, dimensions, and annotations) in a drawing.

## Signature

```csharp
void SelectAll()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method behaves the same as box selecting everything in the graphics area of a part or assembly document or in a sheet of a drawing document.
To select entities different from the defaults, use selection filters. The
See Also
section contains links to methods related to selection filters.

## Examples

- Select All in Part, Assembly, or Drawing (C#) (Select_All_in_Part_Assembly_or_Drawing_Example_CSharp.htm)
- Select All in Part, Assembly, or Drawing (VB.NET) (Select_All_in_Part_Assembly_or_Drawing_Example_vbnet.htm)
- Select All in Part, Assembly, or Drawing (VBA) (Select_All_in_Part_Assembly_or_Drawing_Example_vb.htm)

## See Also

- `IAssemblyDoc.SelectComponentsBySize`
- `IBody2.GetEdges`
- `IBody2.IGetEdges`
- `IComponent2.Select4`
- `IModelDocExtension.IMultiSelect`
- `IModelDocExtension.MultiSelect`
- `IModelDocExtension.SelectByID2`
- `ISelectData`
- `ISelectionMgr`
- `ISldWorks.GetApplySelectionFilter`
- `ISldWorks.GetSelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.IGetSelectionFilters`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`
- `IView.ISelectEntity`
- `IView.SelectEntity`