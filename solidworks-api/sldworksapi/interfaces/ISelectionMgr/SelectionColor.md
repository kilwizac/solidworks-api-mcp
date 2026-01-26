---
type: property
interface: ISelectionMgr
member: SelectionColor
returns: System.Int32
parameters:
  -
    name: Mark
    type: System.Int32
    description: Mark value (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectionMgr.ClearSelectionColors
keywords:
  - selectioncolor
  - iselectionmgr
  - selection
  - mgr
  - color
  - mark
  - int32
readonly: null
---

# ISelectionMgr.SelectionColor

Gets or sets the selection color.

## Signature

```csharp
System.Int32 SelectionColor( 
   System.Int32
Mark
) {get; set;}
```
## Parameters

- `Mark` (System.Int32): Mark value (see Remarks )

## Return Value

Value indicating the color to use for a selection as defined by swSystemColors; these values are from swUserPreferenceIntegerValue_e kadov_tag{{<spaces>}} kadov_tag{{</spaces>}} (see Remarks )

## Remarks

You should have a set of marks that you want to apply to selected objects. These marks are application specific and should be designed to present to the user a visual collection of like objects.
The values that SOLIDWORKS internal dialogs typically use for selection colors are:
swSystemColorsSelectedItem1
swSystemColorsSelectedItem2
swSystemColorsSelectedItem3
You can also specify any of the following values:
swSystemColorsViewportBackground
swSystemColorsTopGradientColor
swSystemColorsBottomGradientColor
swSystemColorsDynamicHighlight
swSystemColorsHighlight
swSystemColorsSelectedFaceShaded
swSystemColorsDrawingsVisibleModelEdge
swSystemColorsDrawingsHiddenModelEdge

## See Also

- `ISelectionMgr.ClearSelectionColors`