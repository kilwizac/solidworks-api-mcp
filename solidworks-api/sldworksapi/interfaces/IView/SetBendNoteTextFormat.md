---
type: method
interface: IView
member: SetBendNoteTextFormat
returns: System.Boolean
parameters:
  -
    name: Format
    type: System.String
    description: Format in which to display all bend notes in this drawing view of a sheet metal part (see Remarks )
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
  - setbendnotetextformat
  - text
  - format
  - string
  - boolean
---

# IView.SetBendNoteTextFormat

Sets the text format of all bend notes in this drawing view of a sheet metal part.

## Signature

```csharp
System.Boolean SetBendNoteTextFormat( 
   System.String
Format
)
```
## Parameters

- `Format` (System.String): Format in which to display all bend notes in this drawing view of a sheet metal part (see Remarks )

## Return Value

True if format is successfully set, false if not

## Remarks

Before calling this method, call
IView::GetBendNoteAttributeString
to specify Format.

## See Also

- `IView.GetBendNoteTextFormat`
- `IView.ShowSheetMetalBendNotes`