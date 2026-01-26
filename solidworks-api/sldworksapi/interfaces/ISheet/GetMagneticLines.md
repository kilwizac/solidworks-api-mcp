---
type: method
interface: ISheet
member: GetMagneticLines
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.IGetMagneticLines
  - ISheet.InsertMagneticLine
keywords:
  - getmagneticlines
  - isheet
  - sheet
  - magnetic
  - lines
  - object
---

# ISheet.GetMagneticLines

Gets the magnetic lines on this drawing sheet.

## Signature

```csharp
System.Object GetMagneticLines()
```
## Parameters

None.

## Return Value

Array of IMagneticLine s

## Remarks

Call
ISheet::GetMagneticLinesCount
to get the number of magnetic lines returned by this method.

## See Also

- `ISheet.IGetMagneticLines`
- `ISheet.InsertMagneticLine`