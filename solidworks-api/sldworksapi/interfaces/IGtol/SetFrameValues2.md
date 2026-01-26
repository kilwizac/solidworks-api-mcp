---
type: method
interface: IGtol
member: SetFrameValues2
returns: System.Boolean
parameters:
  -
    name: FrameNumber
    type: System.Int16
    description: Symbol frame number; 1 for first frame (see Remarks )
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
    description: Primary datum with material conditions ( see Remarks )
  -
    name: Datum2
    type: System.String
    description: Secondary datum with material conditions ( see Remarks )
  -
    name: Datum3
    type: System.String
    description: Tertiary datum with material conditions ( see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameSymbols2
  - IGtol.GetFrameValues
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - setframevalues2
  - igtol
  - gtol
  - values2
  - number
  - int16
  - tol1
  - string
  - tol2
  - datum1
  - datum2
  - datum3
  - boolean
  - insert
  - vba
  - vb
  - net
---

# IGtol.SetFrameValues2

Sets the geometric tolerance values and datum references in the specified frame of this GTol symbol.

## Signature

```csharp
System.Boolean SetFrameValues2( 
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

- `FrameNumber` (System.Int16): Symbol frame number; 1 for first frame (see Remarks )
- `Tol1` (System.String): Tolerance 1 value
- `Tol2` (System.String): Tolerance 2 value
- `Datum1` (System.String): Primary datum with material conditions ( see Remarks )
- `Datum2` (System.String): Secondary datum with material conditions ( see Remarks )
- `Datum3` (System.String): Tertiary datum with material conditions ( see Remarks )

## Return Value

True if frame values are set, false if not

## Remarks

This method is valid only if this Gtol was created in a version of SOLIDWORKS earlier than 2022.
Before calling this method, call:
IGtol::SetFrameSymbols2
to specify the GTol symbol for this frame.
IGtol::GetFrameCount
to specify FrameNumber.
Geometric tolerance and material condition symbols are defined in
C:\ProgramData\SolidWorks\SolidWorks
20
nn
\lang\english\
gtol.sym.
Inspect this file as you specify Datum1, Datum2, and Datum3 in <
LibraryName-SymbolName
> format.
For example, for datum tags A, B, and C:
bRet = aGTol.SetFrameValues2(1, "0.2", "", "B-A-C<MOD-MMC>", "B<MOD-MMC>-C<MOD-LMC>", "C<MOD-MMC>-A")
sets the first symbol frame of this GTol with:
Tolerance 1 = 0.2
Primary datum = B-A-C<MOD-MMC>
Secondary datum = B<MOD-MMC>-C<MOD-LMC>
Teritiary datum = C<MOD-MMC>-A

## Examples

- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)

## See Also

- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`