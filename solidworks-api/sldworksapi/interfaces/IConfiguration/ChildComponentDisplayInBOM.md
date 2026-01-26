---
type: property
interface: IConfiguration
member: ChildComponentDisplayInBOM
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModelDoc2.AddConfiguration3
keywords:
  - childcomponentdisplayinbom
  - iconfiguration
  - configuration
  - child
  - component
  - display
  - bom
  - int32
  - add
  - promote
  - components
  - vb
  - net
  - vba
readonly: null
---

# IConfiguration.ChildComponentDisplayInBOM

Gets or sets the child component display option of this configuration in the Bill of Materials (BOM) for an assembly or for a cutlist part (weldment and/or sheet metal).

## Signature

```csharp
System.Int32 ChildComponentDisplayInBOM {get; set;}
```
## Parameters

None.

## Return Value

Child component display option as defined in swChildComponentInBOMOption_e

## Examples

- Add Configuration and Promote Child Components in BOM (C#) (Add_Configuration_and_Promote_Child_Components_in_BOM_Example_CSharp.htm)
- Add Configuration and Promote Child Components in BOM (VB.NET) (Add_Configuration_and_Promote_Child_Components_in_BOM_Example_VBNET.htm)
- Add Configuration and Promote Child Components in BOM (VBA) (Add_Configuration_and_Promote_Child_Components_in_BOM_Example_VB.htm)

## See Also

- `IModelDoc2.AddConfiguration3`