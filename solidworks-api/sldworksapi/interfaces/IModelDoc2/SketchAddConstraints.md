---
type: method
interface: IModelDoc2
member: SketchAddConstraints
returns: void
parameters:
  -
    name: IdStr
    type: System.String
    description: Constraint (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SkToolsAutoConstr
  - IModelDoc2.SketchConstrainCoincident
  - IModelDoc2.SketchConstrainConcentric
  - IModelDoc2.SketchConstrainParallel
  - IModelDoc2.SketchConstrainPerp
  - IModelDoc2.SketchConstrainTangent
  - IModelDoc2.SketchConstraintsDel
  - IModelDoc2.SketchConstraintsDelAll
  - IModelDoc2.ViewConstraint
keywords:
  - relations
  - constraints
  - sketch
  - see
  - also
  - isketch
  - entities
  - sketchaddconstraints
  - imodeldoc2
  - model
  - doc2
  - add
  - id
  - str
  - string
  - void
  - constrain
  - vba
  - vb
  - net
---

# IModelDoc2.SketchAddConstraints

Adds the specified constraint to the selected entities.

## Signature

```csharp
void SketchAddConstraints( 
   System.String
IdStr
)
```
## Parameters

- `IdStr` (System.String): Constraint (see Remarks )

## Return Value

Unknown.

## Remarks

SOLIDWORKS 2005 and earlier
SOLIDWORKS 2006 and later
sgHORIZONTAL (2D sketch)
sgHORIZONTAL (3D sketch)
sgHORIZPOINTS (2D sketch)
sgHORIZPOINTS (3D sketch)
sgVERTICAL (2D sketch)
sgVERTICAL (3D sketch)
sgVERTPOINTS (2D sketch)
sgVERTPOINTS (3D sketch)
sgALONGZPOINTS
sgALONGZ
sgCOLINEAR
sgCORADIAL
sgPERPENDICULAR
sgPARALLEL
sgTANGENT
sgCONCENTRIC
sgCOINCIDENT
sgSYMMETRIC
sgATMIDDLE
sgATINTERSECT
sgATPIERCE
sgFIXED
sgANGLE
sgARCANG180
sgARCANG270
sgARCANG90
sgARCANGBOTTOM
sgARCANGLEFT
sgARCANGRIGHT
sgARCANGTOP
sgDIAMETER
sgDISTANCE
sgSAMELENGTH
sgOFFSETEDGE
sgSNAPANGLE
sgSNAPGRID
sgSNAPLENGTH
sgUSEEDGE
sgHORIZONTAL2D
sgALONGX3D
sgHORIZONTALPOINTS2D
sgALONGXPOINTS3D
sgVERTICAL2D
sgALONGY3D
sgVERTICALPOINTS2D
sgALONGYPOINTS3D
sgALONGZPOINTS3D
sgALONGZ3D
sgCOLINEAR
sgCORADIAL
sgPERPENDICULAR
sgPARALLEL
sgTANGENT
sgCONCENTRIC
sgCOINCIDENT
sgSYMMETRIC
sgATMIDDLE
sgATINTERSECT
sgATPIERCE
sgFIXED
sgANGLE
sgARCANG180
sgARCANG270
sgARCANG90
sgARCANGBOTTOM
sgARCANGLEFT
sgARCANGRIGHT
sgARCANGTOP
sgDIAMETER
sgDISTANCE
sgSAMELENGTH
sgOFFSETEDGE
sgSNAPANGLE
sgSNAPGRID
sgSNAPLENGTH
sgUSEEDGE
sgMERGEPOINTS

## Examples

- Constrain Sketch (VBA) (Constrain_Sketch_Example_VB.htm)
- Constrain Sketch (VB.NET) (Constrain_Sketch_Example_VBNET.htm)
- Constrain Sketch (C#) (Constrain_Sketch_Example_CSharp.htm)

## See Also

- `IModelDoc2.SkToolsAutoConstr`
- `IModelDoc2.SketchConstrainCoincident`
- `IModelDoc2.SketchConstrainConcentric`
- `IModelDoc2.SketchConstrainParallel`
- `IModelDoc2.SketchConstrainPerp`
- `IModelDoc2.SketchConstrainTangent`
- `IModelDoc2.SketchConstraintsDel`
- `IModelDoc2.SketchConstraintsDelAll`
- `IModelDoc2.ViewConstraint`