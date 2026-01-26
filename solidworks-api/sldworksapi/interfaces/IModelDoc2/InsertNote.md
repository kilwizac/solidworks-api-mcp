---
type: method
interface: IModelDoc2
member: InsertNote
returns: System.Object
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
  - IModelDoc2.IInsertNote
  - IModelDoc2.InsertNewNote3
  - INote
keywords:
  - note
  - see
  - also
  - inote
  - insert
  - insertnote
  - imodeldoc2
  - model
  - doc2
  - text
  - string
  - object
  - vba
  - create
  - block
  - definition
  - instance
  - vb
  - net
---

# IModelDoc2.InsertNote

Inserts a note in this document.

## Signature

```csharp
System.Object InsertNote( 
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
,
INote::Angle
, and
INote::LockPosition
. Use
INote::GetAnnotation
or
INote::IGetAnnotation
to retrieve the
IAnnotation
object.

## Examples

- Insert Note (VBA) (Insert_a_Note_Example_VB.htm)
- Create Block Definition and Insert Block Instance (VBA) (Create_Block_Definition_and_Insert_Block_Instance_Example_VB.htm)
- Create Block Definition and Insert Block Instance (C#) (Create_Block_Definition_and_Insert_Block_Instance_Example_CSharp.htm)
- Create Block Definition and Insert Block Instance (VB.NET) (Create_Block_Definition_and_Insert_Block_Instance_Example_VBNET.htm)

## See Also

- `IModelDoc2.IInsertNote`
- `IModelDoc2.InsertNewNote3`
- `INote`