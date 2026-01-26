---
type: method
interface: ISketchText
member: IGetTextFormat
returns: TextFormat
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.GetTextFormat
  - ISketchText.GetUseDocTextFormat
  - ISketchText.Text
keywords:
  - igettextformat
  - isketchtext
  - sketch
  - text
  - format
---

# ISketchText.IGetTextFormat

Gets the text format for this sketch text.

## Signature

```csharp
TextFormat IGetTextFormat()
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

## See Also

- `ISketchText.GetTextFormat`
- `ISketchText.GetUseDocTextFormat`
- `ISketchText.Text`