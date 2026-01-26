---
type: method
interface: IView
member: GetBendNoteAttributeString
returns: System.String
parameters:
  -
    name: Attribute
    type: System.Int32
    description: Bend note attribute as defined in swBendNoteAttribute_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBendNoteTextFormat
  - IView.ShowSheetMetalBendNotes
keywords:
  - bend
  - line
  - notes
  - drawing
  - views
  - see
  - also
  - iview
  - note
  - inote
  - view
  - bends
  - getbendnoteattributestring
  - attribute
  - string
  - int32
---

# IView.GetBendNoteAttributeString

Gets the internal string that is used to format the text of the specified bend note attribute in this drawing view of a sheet metal part.

## Signature

```csharp
System.String GetBendNoteAttributeString( 
   System.Int32
Attribute
)
```
## Parameters

- `Attribute` (System.Int32): Bend note attribute as defined in swBendNoteAttribute_e

## Return Value

String that is used to format the bend note attribute

## Remarks

Call this method to specify the Format parameter of
IView::SetBendNoteTextFormat
.

## See Also

- `IView.GetBendNoteTextFormat`
- `IView.ShowSheetMetalBendNotes`