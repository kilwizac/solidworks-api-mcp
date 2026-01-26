---
type: method
interface: INote
member: SetName
returns: System.Boolean
parameters:
  -
    name: NameIn
    type: System.String
    description: Note name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetName
keywords:
  - name
  - notes
  - note
  - see
  - also
  - inote
  - names
  - setname
  - string
  - boolean
  - vba
---

# INote.SetName

Sets the name for this note.

## Signature

```csharp
System.Boolean SetName( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Note name

## Return Value

True if the note name is changed successfully, false if not

## Examples

- Set Note Name (VBA) (Set_Note_Name_Example.htm)

## See Also

- `INote.GetName`