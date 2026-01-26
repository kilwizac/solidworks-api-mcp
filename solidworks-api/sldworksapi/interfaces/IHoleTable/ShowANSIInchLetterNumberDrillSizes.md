---
type: property
interface: IHoleTable
member: ShowANSIInchLetterNumberDrillSizes
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IHoleTable.CombineSameSize
  - IHoleTable.CombineTags
keywords:
  - showansiinchletternumberdrillsizes
  - iholetable
  - hole
  - table
  - show
  - ansi
  - inch
  - letter
  - number
  - drill
  - sizes
  - boolean
  - labels
  - datum
  - origin
  - vba
  - vb
  - net
readonly: null
---

# IHoleTable.ShowANSIInchLetterNumberDrillSizes

Gets or sets whether to display hole sizes in this hole table using ANSI inch letters and drill numbers.

## Signature

```csharp
System.Boolean ShowANSIInchLetterNumberDrillSizes {get; set;}
```
## Parameters

None.

## Return Value

True to display hole sizes using ANSI inch letters and drill numbers, false to not

## Remarks

This property:
corresponds to the
Show ANSI inch letter and number drill sizes
option in the Scheme section of the Hole Table PropertyManager page in SOLIDWORKS.
is valid only for holes created with the Hole Wizard tool.
specifies whether to display hole sizes as ANSI inch letters or drill numbers, for example, A or #40.

## Examples

- Get Labels of Datum Origin (VBA) (Get_Labels_of_Datum_Origin_Example_VB.htm)
- Get Labels of Datum Origin (VB.NET) (Get_Labels_of_Datum_Origin_Example_VBNET.htm)
- Get Labels of Datum Origin (C#) (Get_Labels_of_Datum_Origin_Example_CSharp.htm)

## See Also

- `IHoleTable.CombineSameSize`
- `IHoleTable.CombineTags`