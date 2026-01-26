---
type: method
interface: ISketchText
member: GetTextFormat
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.GetUseDocTextFormat
  - ISketchText.IGetTextFormat
  - ISketchText.Text
keywords:
  - gettextformat
  - isketchtext
  - sketch
  - text
  - format
  - object
  - all
  - elements
  - vba
---

# ISketchText.GetTextFormat

Gets the text format for this sketch text.

## Signature

```csharp
System.Object GetTextFormat()
```
## Parameters

None.

## Return Value

Text format

## Remarks

To change the text format of an existing sketch text, get the
ITextFormat
object using this method, next use its APIs to set the text format properties to what you want the sketch text to look like. Then use
ISketchText::SetTextFormat
or
ISketchText::ISetTextFormat
to change how the sketch text looks.
To make the sketch text use the default model text format, use ISketchText:SetTextFormat and ISketchText::ISetTextFormat with the UseDoc argument set to True.

## Examples

- Get All Elements (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)

## See Also

- `ISketchText.GetUseDocTextFormat`
- `ISketchText.IGetTextFormat`
- `ISketchText.Text`