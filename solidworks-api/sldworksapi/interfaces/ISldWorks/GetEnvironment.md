---
type: method
interface: ISldWorks
member: GetEnvironment
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.IGetEnvironment
keywords:
  - getenvironment
  - isldworks
  - sld
  - works
  - environment
  - object
  - analyze
  - text
  - geometry
  - gtol
  - symbol
  - vb
  - net
  - vba
---

# ISldWorks.GetEnvironment

Gets the IEnvironment object.

## Signature

```csharp
System.Object GetEnvironment()
```
## Parameters

None.

## Return Value

IEnvironment object

## Remarks

All numeric values returned from the IEnvironment object are relative to a unit text height of 1.0.; i.e., if a symbol has a text height of 0.15, then multiply the numeric values returned by 0.15.

## Examples

- Analyze Text and Geometry in GTol Symbol (C#) (Analyze_Text_and_Geometry_in_GTol_Flat_Symbol_Example_CSharp.htm)
- Analyze Text and Geometry in GTol Symbol (VB.NET) (Analyze_Text_and_Geometry_in_GTol_Flat_Symbol_Example_VBNET.htm)
- Analyze Text and Geometry in GTol Symbol (VBA) (Analyze_Text_and_Geometry_in_GTol_Flat_Symbol_Example_VB.htm)

## See Also

- `ISldWorks.IGetEnvironment`