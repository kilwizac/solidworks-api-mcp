---
type: property
interface: ISketchText
member: Text
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.GetTextFormat
  - ISketchText.GetUseDocTextFormat
  - ISketchText.IGetTextFormat
  - ISketchText.ISetTextFormat
  - ISketchText.SetTextFormat
keywords:
  - text
  - isketchtext
  - sketch
  - string
  - all
  - elements
  - vba
  - entities
  - replace
readonly: null
---

# ISketchText.Text

Gets or sets the text that makes up this sketch text.

## Signature

```csharp
System.String Text {get; set;}
```
## Parameters

None.

## Return Value

Text that makes up this sketch text

## Remarks

To set the text format, you must be editing the sketch. See
IModelDoc2::EditSketch
or
ISketchManager::InsertSketch
. You can only change text in visible documents.

## Examples

- Get All Elements of Sketch (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)
- Get Sketch Entities (VBA) (Get_Sketch_Entities_Example_VB.htm)
- Replace Sketch Text (VBA) (Replace_Sketch_Text_Example_VB.htm)

## See Also

- `ISketchText.GetTextFormat`
- `ISketchText.GetUseDocTextFormat`
- `ISketchText.IGetTextFormat`
- `ISketchText.ISetTextFormat`
- `ISketchText.SetTextFormat`