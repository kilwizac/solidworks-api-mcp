---
type: method
interface: ISheet
member: IGetMagneticLines
returns: MagneticLine
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of magnetic lines returned by this method
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetMagneticLines
  - ISheet.InsertMagneticLine
keywords:
  - igetmagneticlines
  - isheet
  - sheet
  - magnetic
  - lines
  - count
  - int32
  - line
  - getmagneticlinescount
---

# ISheet.IGetMagneticLines

Gets the magnetic lines on this drawing sheet.

## Signature

```csharp
MagneticLine IGetMagneticLines( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of magnetic lines returned by this method

## Return Value

In-process, unmanaged C++: Array of IMagneticLine s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Examples

- ISheet::GetMagneticLinesCount (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheet~GetMagneticLinesCount)

## See Also

- `ISheet.GetMagneticLines`
- `ISheet.InsertMagneticLine`