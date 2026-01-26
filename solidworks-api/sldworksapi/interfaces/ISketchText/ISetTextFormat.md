---
type: method
interface: ISketchText
member: ISetTextFormat
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the default model text format, false to use a local text format
  -
    name: TextFormat
    type: TextFormat
    description: Local text format to use if UseDoc is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.SetTextFormat
  - ISketchText.Text
keywords:
  - isettextformat
  - isketchtext
  - sketch
  - text
  - format
  - use
  - doc
  - boolean
---

# ISketchText.ISetTextFormat

Sets the text format for this sketch text.

## Signature

```csharp
System.Boolean ISetTextFormat( 
   System.Boolean
UseDoc
,
   TextFormat
TextFormat
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the default model text format, false to use a local text format
- `TextFormat` (TextFormat): Local text format to use if UseDoc is false

## Return Value

True if the text format was successfully set, false if not

## Remarks

To set the text format, you must be editing the sketch. See
IModelDoc2::EditSketch
or
ISketchManager::InsertSketch
.
To change the text format of an existing sketch text, get the
ITextFormat
object using
ISketchText::GetTextFormat
or
ISketchText::IGetTextFormat
, next use the various ITextFormat APIs to set the text format properties to what you want the sketch text to look like. Then use this method to change how the sketch text looks. To make the sketch text use the default model text format, use this method with the useDoc argument set to True.
To determine if this sketch text is using the default model text format or not, use
ISketchText::GetUseDocTextFormat
.

## See Also

- `ISketchText.SetTextFormat`
- `ISketchText.Text`