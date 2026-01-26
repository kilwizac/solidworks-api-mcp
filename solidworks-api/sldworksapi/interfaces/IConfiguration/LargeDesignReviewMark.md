---
type: property
interface: IConfiguration
member: LargeDesignReviewMark
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDocumentSpecification.ViewOnly
keywords:
  - large
  - design
  - review
  - configuration
  - see
  - also
  - iconfiguration
  - assemblies
  - iassemblydoc
  - configurations
  - largedesignreviewmark
  - mark
  - boolean
  - marks
  - vb
  - net
  - vba
readonly: null
---

# IConfiguration.LargeDesignReviewMark

Gets or sets whether to add display data to this configuration when the document is saved.

## Signature

```csharp
System.Boolean LargeDesignReviewMark {get; set;}
```
## Parameters

None.

## Return Value

True to add display data, false to not

## Remarks

This property is valid only if this configuration is one of multiple configurations defined for the assembly or part.
Before SOLIDWORKS 2019, this property specified whether to generate a display list for the configuration of an assembly when it is saved. As of SOLIDWORKS 2019, this property specifies whether to generate a display list for this configuration of:
an assembly on save. If this property is set to true, the assembly configuration's display list is saved, making the configuration visible in Large Design Review mode. In the user interface, this corresponds to selecting the assembly's
ConfigurationManager >
configuration_name
RMB menu > Add Display Data Mark
.
- or -
a part on save. If this property is set to true, the part configuration's display list is saved, making the configuration visible in other applications, such as eDrawings. In the user interface, this corresponds to selecting the part's
ConfigurationManager >
configuration_name
RMB menu > Add Display Data Mark
.

## Examples

- Get and Set Large Design Review Marks for Configurations (C#) (Get_and_Set_Large_Design_Review_Marks_for_Configurations_Example_CSharp.htm)
- Get and Set Large Design Review Marks for Configurations (VB.NET) (Get_and_Set_Large_Design_Review_Marks_for_Configurations_Example_VBNET.htm)
- Get and Set Large Design Review Marks for Configurations (VBA) (Get_and_Set_Large_Design_Review_Marks_for_Configurations_Example_VB.htm)

## See Also

- `IDocumentSpecification.ViewOnly`