---
type: method
interface: IModelDoc2
member: IInsertNote
returns: Note
parameters:
  -
    name: Text
    type: System.String
    description: Text string or symbol for the note (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.InsertNote
keywords:
  - note
  - see
  - also
  - inote
  - insert
  - iinsertnote
  - imodeldoc2
  - model
  - doc2
  - text
  - string
---

# IModelDoc2.IInsertNote

Inserts a note in this document.

## Signature

```csharp
Note IInsertNote( 
   System.String
Text
)
```
## Parameters

- `Text` (System.String): Text string or symbol for the note (see Remarks )

## Return Value

Newly created note

## Remarks

If you use a symbol in Text, it must be formatted as:
<
LibraryName-SymbolName
>
where
LibraryName
and
SymbolName
are in the SOLIDWORKS text file
C:\ProgramData\SolidWorks\SolidWorks 20
nn
\
lang
\
english\gtol.sym
.
NOTE
: You must include the right- and left-angle brackets and separate
LibraryName
and
SymbolName
with a hyphen; for example, <MOD-DEG>.
The leader attachment points for the new note come from the selections made before calling this method. The initial location of the note will be near the selection location. If there are no selections, the note:
Does not have a leader
Is free standing
Is at the origin of the model or drawing
This method creates a default note. To adjust the display characteristics of this note, you should use the pointer that is returned by this method to access the properties and get and set methods of the Note object, such as
INote::SetBalloon
and
INote::Angle
. Use
INote::GetAnnotation
or
INote::IGetAnnotation
to retrieve the
IAnnotation
object.

## See Also

- `IModelDoc2.InsertNote`