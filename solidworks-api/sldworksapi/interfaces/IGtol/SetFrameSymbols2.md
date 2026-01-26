---
type: method
interface: IGtol
member: SetFrameSymbols2
returns: void
parameters:
  -
    name: FrameNumber
    type: System.Int16
    description: Feature control frame 1 for first
  -
    name: GCS
    type: System.String
    description: Geometric tolerance symbol (see Remarks )
  -
    name: TolDia1
    type: System.Boolean
    description: Diameter symbol exists for tolerance 1 (True or false)
  -
    name: TolMC1
    type: System.String
    description: Material condition symbol for tolerance 1 (see Remarks )
  -
    name: TolDia2
    type: System.Boolean
    description: Diameter symbol exists for tolerance 2 (True or false)
  -
    name: TolMC2
    type: System.String
    description: Material condition symbol for tolerance 2 (see Remarks )
  -
    name: DatumMC1
    type: System.String
    description: Material condition symbols for primary datum (see Remarks )
  -
    name: DatumMC2
    type: System.String
    description: Material condition symbols for secondary datum (see Remarks )
  -
    name: DatumMC3
    type: System.String
    description: Material condition symbols for tertiary datum (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameCount
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameSymbols2
  - IGtol.GetFrameValues
  - IGtol.IGetFrameDiameterSymbols
  - IGtol.IGetFrameSymbols2
  - IGtol.IGetFrameValues
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - setframesymbols2
  - igtol
  - gtol
  - symbols2
  - number
  - int16
  - gcs
  - string
  - tol
  - dia1
  - boolean
  - mc1
  - dia2
  - mc2
  - datum
  - mc3
  - void
  - insert
  - vb
  - net
  - vba
---

# IGtol.SetFrameSymbols2

Sets the symbols for the specified frame.

## Signature

```csharp
void SetFrameSymbols2( 
   System.Int16
FrameNumber
,
   System.String
GCS
,
   System.Boolean
TolDia1
,
   System.String
TolMC1
,
   System.Boolean
TolDia2
,
   System.String
TolMC2
,
   System.String
DatumMC1
,
   System.String
DatumMC2
,
   System.String
DatumMC3
)
```
## Parameters

- `FrameNumber` (System.Int16): Feature control frame 1 for first
- `GCS` (System.String): Geometric tolerance symbol (see Remarks )
- `TolDia1` (System.Boolean): Diameter symbol exists for tolerance 1 (True or false)
- `TolMC1` (System.String): Material condition symbol for tolerance 1 (see Remarks )
- `TolDia2` (System.Boolean): Diameter symbol exists for tolerance 2 (True or false)
- `TolMC2` (System.String): Material condition symbol for tolerance 2 (see Remarks )
- `DatumMC1` (System.String): Material condition symbols for primary datum (see Remarks )
- `DatumMC2` (System.String): Material condition symbols for secondary datum (see Remarks )
- `DatumMC3` (System.String): Material condition symbols for tertiary datum (see Remarks )

## Return Value

Unknown.

## Remarks

This method is valid only if this Gtol was created in a version of SOLIDWORKS earlier than 2022.
GTol symbols are defined in
C:\ProgramData\SolidWorks\SolidWorks
20
nn
\lang\english\
gtol.sym.
Reference this file to specify GCS, TolMC1, TolMC2, DatumMC1, DatumMC2, and DatumMC3 in <
LibraryName-SymbolName
> format.
Examples:
GCS = "<IGTOL-POSI>" (Position symbol in the ISO Geometric Tolerancing Symbols library)
TolMC1 = "<MOD-LMC>" (Least Material Condition symbol in the Modifying Symbols library)
After calling this method, call
IGtol::SetFrameValues2
to specify tolerance and datum values.

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameDiameterSymbols`
- `IGtol.IGetFrameSymbols2`
- `IGtol.IGetFrameValues`