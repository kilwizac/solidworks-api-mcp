---
type: method
interface: IAnnotation
member: GetTextFormat
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Number indicating which text within this annotation to check
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetTextFormatCount
  - IAnnotation.IGetTextFormat
  - IAnnotation.ISetTextFormat
  - IAnnotation.SetTextFormat
keywords:
  - gettextformat
  - iannotation
  - annotation
  - text
  - format
  - index
  - int32
  - object
  - change
  - vba
  - whether
  - note
  - contains
  - rich
  - embedded
  - increase
  - width
  - modify
  - reload
  - sheet
  - template
  - vb
  - net
---

# IAnnotation.GetTextFormat

Gets the text format for the specified text in this annotation.

## Signature

```csharp
System.Object GetTextFormat( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Number indicating which text within this annotation to check

## Return Value

ITextFormat

## Remarks

The behavior of this method differs depending on the type of annotation.
Datum target
and
Datum feature symbols
These symbols always use the document default setting for dimension text format to
display text within the symbol. The index argument is not used and should be set
to 0.
Geometric Tolerance
,
display dimensions
,
simple notes
,
surface finish
, and
weld symbols
These symbols can either use the document default setting to display text within
the symbol (dimension text setting for the geometric tolerance symbols and display
dimensions, or note text setting for notes) or they can use a local format. The index
argument is not used and should be set to 0.
Blocks
(and compound notes for documents created in SOLIDWORKS 2015 and earlier)
These symbols might contain several different pieces of text; each piece can use
the document default setting for notes or a local format. The index argument identifies
the text. The index value is 0-based. If the index value is invalid, then this method
returns a Nothing or null pointer. To get the number of text or
ITextFormat
objects, use
IAnnotation::GetTextFormatCount
.
Rich text format
If a note contains embedded rich text information in the string, then this method returns
a text format that does not necessarily reflect what is displayed on the screen for
that note. Use
INote::HasMultipleFonts
to determine if the note contains embedded
rich text information.
ITextFormat is returned if it is for a local setting or for the document
default setting. To determine whether or not this annotation is using the document
default settings for text format, use
IAnnotation::GetUseDocTextFormat
. To set the
text format information, use
IAnnotation::SetTextFormat
.

## Examples

- Change Text Format (VBA) (Change_Text_Format_Example_VB.htm)
- Get Whether Note Contains Rich Embedded Text (VBA) (Get_Whether_Note_Contains_Rich-embedded_Text_Example_VB.htm)
- Increase Width of Text (VBA) (Increase_Width_of_Text_Example_VB.htm)
- Modify and Reload Sheet Format Template (C#) (Modify_and_Reload_Sheet_Format_Template_Example_CSharp.htm)
- Modify and Reload Sheet Format Template (VB.NET) (Modify_and_Reload_Sheet_Format_Template_Example_VBNET.htm)
- Modify and Reload Sheet Format Template (VBA) (Modify_and_Reload_Sheet_Format_Template_Example_VB.htm)

## See Also

- `IAnnotation.GetTextFormatCount`
- `IAnnotation.IGetTextFormat`
- `IAnnotation.ISetTextFormat`
- `IAnnotation.SetTextFormat`