---
type: method
interface: IGtol
member: SetBetweenTwoPoints
returns: void
parameters:
  -
    name: Between
    type: System.Boolean
    description: True to enable the between two points symbol, or false to disable it
  -
    name: TextFrom
    type: System.String
    description: Text on the left end of the symbol
  -
    name: TextTo
    type: System.String
    description: Text on the right end of the symbol
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setbetweentwopoints
  - igtol
  - gtol
  - between
  - two
  - points
  - boolean
  - text
  - string
  - void
  - insert
  - vb
  - net
  - vba
---

# IGtol.SetBetweenTwoPoints

Enables or disables the between two points symbol and its texts.

## Signature

```csharp
void SetBetweenTwoPoints( 
   System.Boolean
Between
,
   System.String
TextFrom
,
   System.String
TextTo
)
```
## Parameters

- `Between` (System.Boolean): True to enable the between two points symbol, or false to disable it
- `TextFrom` (System.String): Text on the left end of the symbol
- `TextTo` (System.String): Text on the right end of the symbol

## Return Value

Unknown.

## Remarks

The TextFrom and TextTo values might be set to empty strings.
This method ignores TextFrom and TextTo if the between value is false (the symbol is being disabled).
Use:
IGtol::GetBetweenTwoPoints
to determine if this symbol is currently in use
IGtol::GetBetweenTwoPointsText
to determine the texts that are part of this symbol

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)