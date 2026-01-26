---
type: property
interface: ICustomBendAllowance
member: BendTableFile
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - bend
  - table
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - bendtablefile
  - icustombendallowance
  - custom
  - allowance
  - file
  - string
readonly: null
---

# ICustomBendAllowance.BendTableFile

Gets or sets the path and file name for the bend table.

## Signature

```csharp
System.String BendTableFile {get; set;}
```
## Parameters

None.

## Return Value

Path and file name for the bend table

## Remarks

When using this property to set the path and file name for a bend table, then the
type of custom bend allowance
is set to this type. However, the last ICustomBendAllowance property called to set a value also re-sets the type of custom bend allowance to its type.
See the ICustomBendAllowance Remarks.

## Examples

- ICustomBendAllowance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomBendAllowance)