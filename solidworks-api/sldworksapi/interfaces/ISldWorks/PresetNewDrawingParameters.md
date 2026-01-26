---
type: method
interface: ISldWorks
member: PresetNewDrawingParameters
returns: System.Boolean
parameters:
  -
    name: DrawingTemplate
    type: System.String
    description: Path and filename ( .slddrt ) of the drawing template to use
  -
    name: ShowTemplate
    type: System.Boolean
    description: True to show the sheet format, false to not NOTE: Valid only for standard sheet sizes and when Width and Height are set to 0.
  -
    name: Width
    type: System.Double
    description: Width of the drawing sheet
  -
    name: Height
    type: System.Double
    description: Height of the drawing sheet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - drawings
  - ui
related: []
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - sheets
  - templates
  - presetnewdrawingparameters
  - isldworks
  - sld
  - works
  - preset
  - new
  - drawing
  - parameters
  - template
  - string
  - show
  - boolean
  - width
  - double
  - height
  - reset
  - sheet
  - documents
  - vba
---

# ISldWorks.PresetNewDrawingParameters

Presets the drawing template and sheet size parameters to avoid showing the Sheet Format/Size dialog when creating a new drawing document in the user-interface.

## Signature

```csharp
System.Boolean PresetNewDrawingParameters( 
   System.String
DrawingTemplate
,
   System.Boolean
ShowTemplate
,
   System.Double
Width
,
   System.Double
Height
)
```
## Parameters

- `DrawingTemplate` (System.String): Path and filename ( .slddrt ) of the drawing template to use
- `ShowTemplate` (System.Boolean): True to show the sheet format, false to not NOTE: Valid only for standard sheet sizes and when Width and Height are set to 0.
- `Width` (System.Double): Width of the drawing sheet
- `Height` (System.Double): Height of the drawing sheet

## Return Value

True if the specified drawing template and sheet size parameters are set, false if not

## Remarks

To show the Sheet Format/Size dialog the next time a new drawing document is opened (SOLIDWORKS default behavior), call
ISldWorks::ResetPresetDrawingParameters
after calling this method and opening a new drawing document.

## Examples

- Preset and Reset Template and Sheet Parameters for New Drawing Documents (VBA) (Preset_and_Reset_Template_and_Sheet_Parameters_for_New_Drawing_Documents_Example_VB.htm)