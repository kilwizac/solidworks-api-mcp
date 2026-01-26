---
type: method
interface: IGtol
member: SetFrameValues
returns: void
parameters:
  -
    name: FrameNumber
    type: System.Int16
    description: Feature control frame 1 for first
  -
    name: Tol1
    type: System.String
    description: Tolerance 1 value
  -
    name: Tol2
    type: System.String
    description: Tolerance 2 value
  -
    name: Datum1
    type: System.String
    description: Datum reference 1 (primary datum)
  -
    name: Datum2
    type: System.String
    description: Datum reference 2 (secondary datum)
  -
    name: Datum3
    type: System.String
    description: Datum reference 3 (tertiary datum)
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameCount
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameSymbols2
  - IGtol.GetFrameValues
  - IGtol.IGetFrameSymbols2
  - IGtol.IGetFrameValues
  - IGtol.SetFrameSymbols2
keywords:
  - setframevalues
  - igtol
  - gtol
  - frame
  - values
  - number
  - int16
  - tol1
  - string
  - tol2
  - datum1
  - datum2
  - datum3
  - void
---

# IGtol.SetFrameValues

Obsolete. Superseded by IGtol::SetFrameValues2.

## Signature

```csharp
void SetFrameValues( 
   System.Int16
FrameNumber
,
   System.String
Tol1
,
   System.String
Tol2
,
   System.String
Datum1
,
   System.String
Datum2
,
   System.String
Datum3
)
```
## Parameters

- `FrameNumber` (System.Int16): Feature control frame 1 for first
- `Tol1` (System.String): Tolerance 1 value
- `Tol2` (System.String): Tolerance 2 value
- `Datum1` (System.String): Datum reference 1 (primary datum)
- `Datum2` (System.String): Datum reference 2 (secondary datum)
- `Datum3` (System.String): Datum reference 3 (tertiary datum)

## Return Value

Unknown.

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameSymbols2`
- `IGtol.IGetFrameValues`
- `IGtol.SetFrameSymbols2`