---
type: method
interface: ISketchText
member: GetUseDocTextFormat
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.Text
keywords:
  - getusedoctextformat
  - isketchtext
  - sketch
  - text
  - use
  - doc
  - format
  - boolean
  - all
  - elements
  - vba
---

# ISketchText.GetUseDocTextFormat

Gets whether default model text format is in use in this sketch text.

## Signature

```csharp
System.Boolean GetUseDocTextFormat()
```
## Parameters

None.

## Return Value

True if the default model text format is used, false if not

## Remarks

To change the text format of an existing sketch text, get the
ITextFormat
object using
ISketchText::GetTextFormat
or
ISketchText::IGetTextFormat
, next use the ITextFormat APIs to set the text format properties to what you want the sketch text to look like. Then, use
ISketchText::SetTextFormat
or
ISketchText::ISetTextFormat
to change how the sketch text looks.
To make the sketch text use the default model text format, use ISketchText::SetTextFormat and ISketchText::ISetTextFormat with the UseDoc argument set to True.

## Examples

- Get All Elements of Sketch (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)

## See Also

- `ISketchText.Text`