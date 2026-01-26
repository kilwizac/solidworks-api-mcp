---
type: method
interface: INote
member: GetUpperRight
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.IGetUpperRight
keywords:
  - note
  - see
  - also
  - inote
  - text
  - notes
  - getupperright
  - upper
  - right
  - object
  - coordinates
  - selected
  - vba
---

# INote.GetUpperRight

Gets the note's upper-right text point.

## Signature

```csharp
System.Object GetUpperRight()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

Format of retval is the following array of 3 doubles:
return value[0] = x coordinate of upper-right text point
return value[1] = y coordinate of upper-right text point
return value[2] = z coordinate of upper-right text point

## Examples

- Get Upper-right Text Coordinates of Selected Note (VBA) (Get_Upper-right_Text_Coordinates_of_Selected_Note_Example_VB.htm)

## See Also

- `INote.IGetUpperRight`