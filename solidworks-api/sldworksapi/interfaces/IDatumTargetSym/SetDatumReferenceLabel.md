---
type: method
interface: IDatumTargetSym
member: SetDatumReferenceLabel
returns: System.Boolean
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0-based index indicating the datum reference label to set
  -
    name: Text
    type: System.String
    description: Datum reference label
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setdatumreferencelabel
  - idatumtargetsym
  - datum
  - target
  - sym
  - reference
  - label
  - which
  - one
  - int32
  - text
  - string
  - boolean
  - insert
  - modify
  - symbol
  - vb
  - net
  - vba
---

# IDatumTargetSym.SetDatumReferenceLabel

Sets the specified datum target reference label.

## Signature

```csharp
System.Boolean SetDatumReferenceLabel( 
   System.Int32
WhichOne
,
   System.String
Text
)
```
## Parameters

- `WhichOne` (System.Int32): 0-based index indicating the datum reference label to set
- `Text` (System.String): Datum reference label

## Return Value

True if the datum reference label is set successfully, false if it was not

## Remarks

Use
IDatumTargetSym::GetDatumReferenceLabel
to get the datum target reference labels.
To see the change in a drawing, call
IModelDoc2::GraphicsRedraw2
.

## Examples

- Insert and Modify Datum Target Symbol (C#) (Insert_and_Modify_Datum_Target_Symbol_Example_CSharp.htm)
- Insert and Modify Datum Target Symbol (VB.NET) (Insert_and_Modify_Datum_Target_Symbol_Example_VBNET.htm)
- Insert and Modify Datum Target Symbol (VBA) (Insert_and_Modify_Datum_Target_Symbol_Example_VB.htm)