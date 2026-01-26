---
type: method
interface: IDatumTargetSym
member: GetDatumReferenceLabel
returns: System.String
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0-based index indicating the datum reference label to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.SetDatumReferenceLabel
keywords:
  - getdatumreferencelabel
  - idatumtargetsym
  - datum
  - target
  - sym
  - reference
  - label
  - which
  - one
  - int32
  - string
  - insert
  - modify
  - symbol
  - vb
  - net
  - vba
---

# IDatumTargetSym.GetDatumReferenceLabel

Gets the specified datum target reference label.

## Signature

```csharp
System.String GetDatumReferenceLabel( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): 0-based index indicating the datum reference label to get

## Return Value

Datum reference label

## Examples

- Insert and Modify Datum Target Symbol (C#) (Insert_and_Modify_Datum_Target_Symbol_Example_CSharp.htm)
- Insert and Modify Datum Target Symbol (VB.NET) (Insert_and_Modify_Datum_Target_Symbol_Example_VBNET.htm)
- Insert and Modify Datum Target Symbol (VBA) (Insert_and_Modify_Datum_Target_Symbol_Example_VB.htm)

## See Also

- `IDatumTargetSym.SetDatumReferenceLabel`