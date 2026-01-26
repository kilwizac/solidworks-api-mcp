---
type: method
interface: IEquationMgr
member: UpdateValuesFromExternalEquationFile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IEquationMgr.FilePath
  - IEquationMgr.LinkToFile
keywords:
  - updatevaluesfromexternalequationfile
  - iequationmgr
  - equation
  - mgr
  - update
  - values
  - external
  - file
  - boolean
  - pack
  - go
  - part
  - linked
  - vb
  - net
  - vba
---

# IEquationMgr.UpdateValuesFromExternalEquationFile

Updates equations dependent on a linked equation file and ensures that the linked equation file exists and updates its current path, if necessary.

## Signature

```csharp
System.Boolean UpdateValuesFromExternalEquationFile()
```
## Parameters

None.

## Return Value

True if the equations are updated, false if not

## Examples

- Pack and Go Part and Linked Equation (C#) (Pack_and_Go_Part_and_Linked_Equation_Example_CSharp.htm)
- Pack and Go Part and Linked Equation (VB.NET) (Pack_and_Go_Part_and_Linked_Equation_Example_vbnet.htm)
- Pack and Go Part and Linked Equation (VBA) (Pack_and_Go_Part_and_Linked_Equation_Example_vb.htm)

## See Also

- `IEquationMgr.FilePath`
- `IEquationMgr.LinkToFile`